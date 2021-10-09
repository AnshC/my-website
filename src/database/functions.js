import { supabase } from './dbClient'

export async function getPosts(db) {
    const { data } = await supabase
    .from(db)
    .select()
    return data
}

export async function getPost(db, post) {
    const { data } = await supabase
    .from(db)
    .select()
    .filter('post_link', 'eq', post)
    return data
}