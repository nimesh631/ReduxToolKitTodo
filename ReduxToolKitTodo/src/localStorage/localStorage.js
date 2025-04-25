export const loadState = () => {
    try{
        const state = localStorage.getItem('todos');
        return state ? JSON.parse(state) : undefined;

    }catch(err) {
        return undefined;
    }
};

export const saveState = (state)=> {
    try{
        localStorage.setItem('todos',JSON.stringify(state));
    }catch(err){
        console.error('Error saving State:',err);
    }
}