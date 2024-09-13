
const getVoteCount = (obj) => {
    // first apporch
     const result = obj.upvotes -  obj.downvotes
     console.log(result);
     
     /**  second apporch
      * const { upvotes, downvotes } = obj;
      * const result = upvotes -  downvotes
      */  
}

// const getVoteCount3approch = ({upvotes , downvotes}) => upvotes - downvotes;

getVoteCount({ upvotes: 13, downvotes: 0 }) // 13

getVoteCount({ upvotes: 2, downvotes: 33 }) // -31

getVoteCount({ upvotes: 132, downvotes: 132 }) // 0