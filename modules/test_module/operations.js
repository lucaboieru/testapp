exports.test_function = function (link) {
    console.log(link.data);

    link.res.writeHead(200);
    link.res.end();
}