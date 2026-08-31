import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL_CLIENT
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_APIKEY
export const supabaseConnectionClient = createClient(supabaseUrl, supabasePublishableKey)