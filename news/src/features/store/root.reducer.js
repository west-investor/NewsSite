
import newsLikeReducer from '../News/Likes/like.reducer'


const rootReducer = (state= {}, action) => {
    return {
        ...state,
        articleReducer: newsLikeReducer(state.articleReducer,action)
    }
}
export default rootReducer