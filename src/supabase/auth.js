import supabase from "./client";

// controlador de registro
export const signUpWithEmail = async (data) => {
    let res;
    try {
        res = await supabase.auth.signUp(data);
        return res;
    } catch (error) {
        console.error('Error al registrarse : ', error);
        
    } return res;
}
// controlador para asignar el nombre del usuario
export const updateProfile = async (data) => {
    try {
        await supabase.from('profiles').upsert(data, {returning : 'minimal'});
    } catch (error) {
        console.error('Error al actualizar el perfil : ', error);
    }
}
// controlador de inicio de sesion
export const signInWithEmail = async ({email, password}) => {
    let res;
    try {
        res = await supabase.auth.signInWithPassword({email, password});
        return res;
    } catch (error) {
        console.error('Error al iniciar sesion : ', error);
    }
    return res;
}
// controlador para obtener el perfil
export const fetchUserProfile = async (userId) => {
    try {
        const res = await supabase.from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        // console.log(res.data.full_name)
        return res.data;
    } catch (error) {
        console.error('Error al obtener el perfil : ', error);
    }
}