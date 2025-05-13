import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
    'https://btqyrahhdsxtsmbqtfjd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cXlyYWhoZHN4dHNtYnF0ZmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTI3NzYsImV4cCI6MjA2MjU4ODc3Nn0.M0P5YcfuE0YaupQpUXtRXt56YYs5CBG3W7TievCmSt4'
);
window.supabase = supabase;