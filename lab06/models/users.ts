import * as db from '../helpers/database';

export const getAll = async function getAll() {
    // TODO: use page, limit, order to give pagination
    let query = "SELECT * FROM users;"
    let data = await db.run_query(query, '');
    return data;
}

export const getById = async (id:any) => {
    let query = "SELECT * FROM users WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

/*testing {
    "id": "4",
    "username": "Jack",
    "email": "jack@gmail.com"
}*/
export const add = async (article:any) => {
    let keys = Object.keys(article);
    let values = Object.values(article);
    let key = keys.join(',');
    let param = '';
    for(let i:number = 0; i<values.length; i++){ param +='?,'};
    param = param.slice(0,-1);
    let query = `INSERT INTO users (${key}) VALUES (${param})`;
    try{
        await db.run_insert(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
}

export const update = async (id: number, article: any) => {
    let query = "UPDATE users SET ";
    let values: any = { id: id };
    let setClauses: string[] = [];
    Object.keys(article).forEach((key) => {
        setClauses.push(`${key} = :${key}`);
        values[key] = article[key];
      });
    
    query += setClauses.join(', ') + " WHERE id = :id;";
    
    try{
        await db.run_update(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
}

export const del = async (id: number) => {
    let query = `DELETE FROM users WHERE id = :id;`;

    let values = {
        id: id
    };

    try{
        await db.run_delete(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
};
