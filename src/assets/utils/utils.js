export function newComment(text, author) {
  let user = JSON.parse(localStorage.getItem("user"));

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: `${author === "" ? user.name : author}`,
    date: commentDate(),
    comment: text,
    ava: "",
    childrenComments: [],
  };
}

function commentDate() {
  let date = new Date()
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");

  return date;
}

export function insertComment(comments, text, author, id) {
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    if (comment.id === id) {
      comment.childrenComments.unshift(newComment(text, author));
    }
  }

  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    insertComment(comment.childrenComments, text, author, id);
  }
}
