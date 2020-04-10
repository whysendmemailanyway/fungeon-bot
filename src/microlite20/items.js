module.exports = {
    getAllItems: (knex) => {
        return knex
            .select()
            .from('items');
    }
}