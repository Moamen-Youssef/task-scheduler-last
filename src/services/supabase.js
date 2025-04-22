import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ynrmzpwjqwvzqwqkeoah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlucm16cHdqcXd2enF3cWtlb2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMDk2NjksImV4cCI6MjA2MDg4NTY2OX0.IX9lTzBjG7ds5kNTG-K5b-1Ta2YB6V81PFUSxxkX69Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
