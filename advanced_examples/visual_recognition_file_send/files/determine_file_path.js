if (msg.req.files) {
    var files = Object.keys(msg.req.files);
    msg.payload = msg.req.files[files[0]][0].path;
}
return msg;
