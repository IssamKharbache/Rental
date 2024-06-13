import {create} from 'zustand';

export type SearchQueryType = {
    country : string | undefined; 
    checkIn:Date | undefined;
    checkOut:Date |undefined;
    guests:number;
    bathrooms:number;
    bedrooms:number;
    category:string;
}


interface SeachModalStore {
    isOpen : boolean;
    step:string;
    open:(step:string)=> void;
    close:()=>void;
    query:SearchQueryType;
    setQuery:(query:SearchQueryType)=>void
}

const useSearchModal = create<SeachModalStore>((set)=>({
    isOpen : false,
    open: (step)=> set({isOpen: true,step:step}),
    close: ()=>set({isOpen: false}),
    setQuery:(query:SearchQueryType)=>set({query:query}),
    query :{
        country:'',
        checkIn:undefined,
        checkOut:undefined,
        guests:1,
        bathrooms:0,
        bedrooms:0,
        category:'',
    },
    step:''
    }
))

export default useSearchModal;