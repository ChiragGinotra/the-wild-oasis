import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wukyodqackljsljqgawo.supabase.co";
const supabaseKey =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1a3lvZHFhY2tsanNsanFnYXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTQyMjUsImV4cCI6MjAyODg3MDIyNX0.Q4T2sCtq9sDkt7Rb9GVuREiDO506yR5eNTyrV3VD_Fo ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
