import { supabase } from './dbClient'

export async function getPosts(db) {
    const { data } = await supabase
    .from(db)
    .select()
    return data
}