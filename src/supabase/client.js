import { createClient } from "@supabase/supabase-js";
// configuracion de supabase
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)

export default supabase