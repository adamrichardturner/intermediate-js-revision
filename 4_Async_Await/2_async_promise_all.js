async function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User-${id}` })
    }, Math.random() * 1000)
  })
}

async function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ userId, postId: 1, content: 'Sample post' }])
    }, Math.random() * 1000)
  })
}

async function fetchUserAndPosts(id) {
  // Starting both asynchronous operations concurrently
  const userPromise = fetchUser(id)
  const postsPromise = fetchPosts(id)

  // Awaiting both promises to be resolved using Promise.all
  const [user, posts] = await Promise.all([userPromise, postsPromise])

  // Return the combined result
  return { user, posts }
}

// Using the function
fetchUserAndPosts(1).then((data) => {
  console.log('User:', data.user)
  console.log('Posts:', data.posts)
})
