import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://wnjjnmfulyyrzphvhirk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduampubWZ1bHl5cnpwaHZoaXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMjIwOTgsImV4cCI6MjA1ODU5ODA5OH0.H5jn-l1FBmRxVNTEtG4jFFsGrdilZCry6EuoAAM-8p8";

export const supabase = createClient(supabaseURL, supabaseAnonKey);