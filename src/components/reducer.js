export const initialState={
    basket:[],
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, items) => items.prize + amount, 0);

const reducer=(state,action)=>{
    // console.log(action)
    switch(action.type){
        case 'ADD-TO-BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE-FROM-BASKET':
            const index=state.basket.findIndex((basketitem)=>basketitem.id=action.id);
            let newBasket=[...state.basket]

            if(index>=0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in basket)`
                )
            }
            return{
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}
export default reducer;