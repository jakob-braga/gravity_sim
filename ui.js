let slider_x = width + 50;
let slider_y = 90;
let slider_step = 50;

var G_mult = null;
var p_slider;
var G_slider;

function planet_slider() {
    p_slider = createSlider(0, 50, Number(localStorage.getItem("p_slider_value")), 1);
    planet_num = p_slider.value();
    p_slider.position(slider_x, slider_y);
}

function grav_slider() {
    G_slider = createSlider(-5, 5, Number(localStorage.getItem("g_slider_value")), 1);
    G_mult = G_slider.value();
    if (G_mult < 0) {
        G_mult = -1 / (2 * G_mult);
    } else if (G_mult == 0) {
        G_mult = 1;
    } else {
        G_mult = 2 * G_mult;
    }
    G_slider.position(slider_x, slider_y + slider_step);
}

document.getElementById('refresh_button').onclick = function () {
    localStorage.setItem("p_slider_value", str(p_slider.value()));
    localStorage.setItem("g_slider_value", str(G_slider.value()));
    document.location.reload();
}
