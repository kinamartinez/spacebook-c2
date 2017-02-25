/**
 * Created by karina on 16/02/17.
 */
"use strict";
var postArray = [];
var idValue = 0;

$(".add-post").on("click", function () {
    var postName = $("#post-name").val();
    newPost(postName);
    addPostToDiv();
    remove()
});


var newPost = function (postName, comment) {
    idValue = idValue + 1;
    postArray.push({
        postName: postName,
        id: idValue,
        comment: comment
    })
};
var addPostToDiv = function () {
    $(".posts").find("p").remove();
    $(".posts").find("button").remove();
    for (i = 0; i < postArray.length; i++) {
        $(".posts").append("<p class='post' data-id=" + (postArray[i]["id"]) + ">+<a href='#' class='remove'>remove  </a>+</p>");
        $(".posts p:last-child").append(postArray[i]["postName"] + " - " + "Comment" + " " + postArray[i]["comment"]);

    }
};

var _findPostById = function (id) {
    for (i = 0; i < postArray.length; i++) {
        if (postArray[i] === id) {
            return _findPostById[i]
        }
    }

};


var removePost = function (actualPost) {
    var $clickedPost = $(actualPost).closest('.post');
    var id = $clickedPost.data().id;

    var postElementRemove = _findPostById(id);

    postArray.splice(postArray.indexOf(postElementRemove), 1);
    $clickedPost.remove();
};


$(".add-comment").click(function () {
    $(".posts ").append("<input type='text' id='comment-name' class='form-control' placeholder='Comment Text'></input>")

});


console.log(postArray);





var renderComments = function () {

        for(i=0; i<posts.comment.length; i++){
            var eachComment = posts.comment[i];
            $(".comments-container").append("<p class='commentClass' data-id='eachComment'>'+ eachComment + ' </p>")

        }
    }
    */
