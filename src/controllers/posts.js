const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  })

  return post
}

/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */
async function findAllPosts(query) {
  let where = {}
  if (query.userId) { where.userId = query.userId }

  const posts = await Posts.findAll({
    include: [ Users ],
    where
  })

  return posts
}

module.exports = {
  createNewPost,
  findAllPosts
}
