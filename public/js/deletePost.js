const deleteFormHandler = async (event) => {
  event.preventDefault();

  // Gets post id from URL
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/posts/${id}', {
    method: 'DELETE',
    body: JSON.stringify({ post_id: id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert('Failed to delete post');
  }
};

document.querySelector('.delete-post-button').addEventListener('click', deleteFormHandler);
