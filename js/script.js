function tampilkanMenu() {
    $.getJSON('data/shanna-idn.json', function (data) {
        let menu = data.menu;
        $.each(menu, function(i, data) {
            $('#daftarMenu').append('<div class="col-md-3"><div class="card mb-3" style="width: 15rem;"><img class="card-img-top" src="img/menu/'+ data.gambar +'"> <div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5> <a href="#" class="btn btn-primary">Pesan sekarang!</a></div></div></div>')
        });
    });
}

//Menampilkan default awal
tampilkanMenu();

$('.nav-link').on('click', function () {

    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html(); 
    $('h1').html(kategori);

    if(kategori == 'All Menu') {
        tampilkanMenu();
        return;
    }

    $.getJSON('data/shanna-idn.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if(data.kategori == kategori) {
                content += '<div class="col-md-3"><div class="card mb-3" style="width: 15rem;"><img class="card-img-top" src="img/menu/'+ data.gambar +'"> <div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5> <a href="#" class="btn btn-primary">Pesan sekarang!</a></div></div></div>';
            }
        });

        $('#daftarMenu').html(content);
    });
});