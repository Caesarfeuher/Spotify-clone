export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:'BQCMKsgSdCMzf2wibfeFWSe0Q2Q5U7T1wdMaq15K8nR2_6OERcxNaCUQZSfT2UJGUK_THC3aYUf9ywxhw0pp9FQ5r1ZIDDcaSUy3p-ckOGsjFfD9Iemqy8BU9Sne777pKCVNh9lT8dLPdVKAxNNMYmrSO-zPzFEHBmsD0UpGnYJw1-wBAs-F7-fIWwlnmkWIF9YT6Y5Buur3unKhXaBY'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
        return{
        ...state,
        user: action.user,
        };

        case'SET_TOKEN':
        return{
            ...state,
            token: action.token,
            };

        case'SET_PLAYLISTS':
         return{
            ...state,
            playlists: action.playlists,
            };


            case'SET_DISCOVER_WEEKLY':
         return{
            ...state,
            discover_weekly: action.discover_weekly,
            };

     default:
        return state;
    }
}


export default reducer;