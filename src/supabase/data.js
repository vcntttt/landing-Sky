import supabase from "./client";

export const fetchComments = async () => {
    try {
        const res = await supabase.from('comments').select('*')
        // console.log(res.data)
        return res.data;
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

export const deleteComment = async (id) => {
    try {
        const res = await supabase.from('comments').delete().eq('id', id)
        return res
    } catch (error) {
        console.error(error)
    }
}
export const updateComment = async (data) => {
    try {
        const {id, text} = data
        const res = await supabase
        .from('comments')
        .update({text})
        .match({id})
        .single();
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const addComment = async (data) => {
    try {
        await supabase.from('comments').insert(data);
    } catch (error) {
        console.error('Error al agregar el comentario : ', error);
    }
}

export const saveMsg = async (data) => {
    try {
        await supabase.from('messages').insert(data);
    } catch (error) {
        console.error('Error al agregar el mensaje : ', error);
    }
}