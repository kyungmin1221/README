const getCommentListAPI = async (postId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json.comments.reverse();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCommentListAPI;
