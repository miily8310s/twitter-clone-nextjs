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
      comments: {
        Row: {
          body: string | null
          created_at: string | null
          id: number
          postId: number | null
          userId: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: number
          postId?: number | null
          userId?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: number
          postId?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_postId_fkey"
            columns: ["postId"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_userId_fkey"
            columns: ["userId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      follows: {
        Row: {
          created_at: string | null
          followedId: string | null
          followId: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          followedId?: string | null
          followId?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          followedId?: string | null
          followId?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "follows_followedId_fkey"
            columns: ["followedId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_followId_fkey"
            columns: ["followId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      likes: {
        Row: {
          id: number
          post_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
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
        Relationships: [
          {
            foreignKeyName: "posts_userId_fkey"
            columns: ["userId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          cover_image: string | null
          created_at: string | null
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
          created_at?: string | null
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
          created_at?: string | null
          email?: string | null
          followingIds?: string[] | null
          id?: string
          name?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
