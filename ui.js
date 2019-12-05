let slider_x = width + 50;
let slider_w = 100;
let slider_y = 120;
let slider_step = 136;

var G_mult = null;
var p_slider;
var G_slider;
var s_slider;
var p_num_val_elem = document.getElementById('bodynum');
var g_num_val_elem = document.getElementById('gravnum');
var s_num_val_elem = document.getElementById('starnum');

// planet stuff

function planet_slider() {
    p_slider = createSlider(0, 50, Number(localStorage.getItem("p_slider_value")), 1);
    planet_num = p_slider.value();
    p_slider.position(slider_x, slider_y);
}

function pnum() {
    p_num_val_elem.innerHTML = str(p_slider.value());
}

// gravity stuff

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

function gnum() {
    display_G = G_slider.value();
    if (display_G < 0) {
        display_G = -1 / (2 * display_G);
    } else if (display_G == 0) {
        display_G = 1;
    } else {
        display_G = 2 * display_G;
    }

    g_num_val_elem.innerHTML = str(display_G.toFixed(2));
}

// star stuff

function star_slider() {
    s_slider = createSlider(1, 2, Number(localStorage.getItem("s_slider_value")), 1);
    star_num = s_slider.value();
    s_slider.position(slider_x, slider_y + slider_step * 2);
}

function snum() {
    s_num_val_elem.innerHTML = str(s_slider.value());
}

document.getElementById('refresh_button').onclick = function () {
    localStorage.setItem("p_slider_value", str(p_slider.value()));
    localStorage.setItem("g_slider_value", str(G_slider.value()));
    localStorage.setItem("s_slider_value", str(s_slider.value()));
    document.location.reload();
}
