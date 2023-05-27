import { RootState } from "@/libs/store";
import { supabaseClient } from "@/libs/supabaseClient";
import { onCurrentUser, resetCurrentUser } from "@/slices/currentUserSlice";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCurrentUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const [_, setSession] = useState<any>(null);
  const { currentUser } = useSelector((state: RootState) => state.currentUser);

  useEffect(() => {
    const saveSessions = (session: Session | null) => {
      // setSession(session);
      dispatch(onCurrentUser(session?.user || null));
    };
    supabaseClient.auth
      .getSession()
      .then(({ data }) => saveSessions(data.session));

    const { data } = supabaseClient.auth.onAuthStateChange(
      async (_, session) => {
        saveSessions(session);
      }
    );

    return () => {
      data.subscription.unsubscribe();
    };
  }, [dispatch]);

  const onSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    debugger;
    if (!error) {
      dispatch(resetCurrentUser());
      router.push("/");
    }
  };

  return {
    currentUser,
    // isLoading,
    onSignOut,
  };
};
