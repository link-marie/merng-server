const postsResolvers = require('./posts')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')

module.exports = {
  Post: {
    likeCount(parent){
      return parent.likes.length
    },
    commentCount: (parent) => parent.comments.length
  },
  Query: {
    sayHi: () => 'Hello World!',
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
}