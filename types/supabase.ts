export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          body: string | null
          created_at: string | null
          id: number
          userId: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: number
          userId?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: number
          userId?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          cover_image: string | null
          email: string | null
          followingIds: string[] | null
          id: string
          name: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          cover_image?: string | null
          email?: string | null
          followingIds?: string[] | null
          id: string
          name?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          cover_image?: string | null
          email?: string | null
          followingIds?: string[] | null
          id?: string
          name?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
