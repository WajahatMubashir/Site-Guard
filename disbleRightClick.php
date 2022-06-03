<?php
/**
* Plugin Name: Protect_Website
* Plugin URI: 
* Description: A plugin to Disable Right Click, Protect Text, and Hide Source Code
* Version: 0.0.1
 * Author: Wajahat Mubashir
 */

 // Exit if accessed directly
 if( !defined( 'ABSPATH' ) ) exit; 

 // Hook For StyleSheet
add_action( 'wp_enqueue_scripts', 'disableClick_load_js' );
add_action( 'admin_enqueue_scripts', 'disableClick_load_js' );

 // Load JS
 function disableClick_load_js() {
        wp_enqueue_script('JS-load', plugin_dir_url(__FILE__).'disableClick.js');
        wp_enqueue_style( 'CSS-load', plugin_dir_url(__FILE__).'disableRightClick.css');
 }