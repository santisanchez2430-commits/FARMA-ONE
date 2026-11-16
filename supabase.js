
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = 'https://jzsarvhmvfgjclcuwdiq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_c_1d53CEwUvk-HwS4c9D7A_8vcomUBa';

// CREAR CONEXIÓN
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// EXPORTAR CONEXIÓN
export default supabase;

console.log('FarmaOne: cliente de Supabase inicializado');
