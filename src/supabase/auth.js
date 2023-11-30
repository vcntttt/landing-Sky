import supabase from "./client";

export const signUpWithEmail = async (data) => {
    let res;
    try {
        res = await supabase.auth.signUp(data);
        return res;
    } catch (error) {
        console.error('Error al registrarse : ', error);
        
    } return res;
}

export const updateProfile = async (data) => {
    try {
        await supabase.from('profiles').upsert(data, {returning : 'minimal'});
    } catch (error) {
        console.error('Error al actualizar el perfil : ', error);
    }
}

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

export const fetchUserProfile = async (userId) => {
    try {
        const res = await supabase.from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        // console.log(res.data.full_name)
        return res.data.full_name;
    } catch (error) {
        console.error('Error al obtener el perfil : ', error);
    }
}

export const fetchComments = async () => {
    try {
        const res = await supabase.from('comments').select('*')
        // console.log(res)
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const fetchPlanes = async () => {
    try {
        const res = await supabase.from('planes').select('*')
        return res.data;
    } catch (error) {
        console.error(error)
    }
}