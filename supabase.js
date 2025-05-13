
// Initialize Supabase client
const { createClient } = supabase;
const supabaseUrl = 'https://btqyrahhdsxtsmbqtfjd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...St4'; // placeholder
const db = createClient(supabaseUrl, supabaseKey);
