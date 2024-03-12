const domain=import.meta.env.VITE_BACKEND_URL

const getPokerList = async () => (await fetch(domain+'poker')).json();
const getPokerResult = async (id) => {
    if(id=='recent') return (await (await fetch(domain+'poker/'+id)).json())['result'];
    else return (await (await fetch(domain+'poker/'+id)).json())['result'];
}

export {getPokerList, getPokerResult}