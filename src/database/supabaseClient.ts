import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://deegnzjrdsoxumzjcmrn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZWduempyZHNveHVtempjbXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxOTAzMTIsImV4cCI6MjA1MDc2NjMxMn0.mJoN0NmdEh-JiP9vP4CkurFb_hczF3PqKDy93uJO3ro";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);