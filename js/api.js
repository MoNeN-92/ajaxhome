
$(function () {

    $(".home").click(function (e) {
        e.preventDefault();
$(".loading").removeClass("d-none");
        $.ajax({
            type: "get",
            url: "Data.json",
            dataType: "json",
            success: function (response) {
                response.forEach(Data => {
                    let show = `${Data.feedbackHome}`

                    $(".loading").addClass("d-none");
                    $('#hom').append(show);
                    
                });

            }
        });

    })
});
$(function () {

    $(".pr").click(function (e) {
        e.preventDefault();
        $(".loading").removeClass("d-none");
        $.ajax({
            type: "get",
            url: "Data.json",
            dataType: "json",
            success: function (response) {
                response.forEach(Data => {
                    let shows = `${Data.feedbackProduction}`;
                    $(".loading").addClass("d-none");
                    $('#pro').append(shows);
                });

            }
        });

    })
});
$(function () {

    $(".ab").click(function (e) {
        e.preventDefault();
        $(".loading").removeClass("d-none");
        $.ajax({
            type: "get",
            url: "Data.json",
            dataType: "json",
            success: function (response) {
                response.forEach(Data => {
                    let showes = `${Data.feedbackAbout}`;
                    $(".loading").addClass("d-none");
                    $('#abo').append(showes);
                });

            }
        });

    })
});
$(function () {

    $(".cont").click(function (e) {
        e.preventDefault();
        $(".loading").removeClass("d-none");
        $.ajax({
            type: "get",
            url: "Data.json",
            dataType: "json",
            success: function (response) {
                response.forEach(Data => {
                    let showes = `${Data.feedbackContact}`;
                    $(".loading").addClass("d-none");
                    $('#cont').append(showes);
                    
                });

            }
        });

    })
});