<?php
/**
* Plugin Name: Protect-Website
* Plugin URI: https://github.com/WajahatMubashir/Site-Guard
* Description: A plugin to Disable Right Click, Protect Text, Delay RSS Feed to protect from bad bots and Hide Source Code
* Version: 0.0.6
 * Author: Wajahat Mubashir
 */

 // Exit if accessed directly
if (!defined('ABSPATH')) { exit; } 

 // Hook For StyleSheet
add_action( 'wp_enqueue_scripts', 'disableClick_load_js' );
add_action( 'admin_enqueue_scripts', 'disableClick_load_js' );

 // Load JS
 function disableClick_load_js() {
        wp_enqueue_script('JS-load', plugin_dir_url(__FILE__).'disableClick.js');
        wp_enqueue_style( 'CSS-load', plugin_dir_url(__FILE__).'disableRightClick.css');
 }


//Feed Delay
 function publish_later_on_feed($where) {
 
    global $wpdb;
 
    if ( is_feed() ) {
        // timestamp in WP-format
        $now = gmdate('Y-m-d H:i:s');
 
        // value for wait; + device
        $wait = '10'; // integer
 
       
        $device = 'MINUTE'; //MINUTE, HOUR, DAY, WEEK, MONTH, YEAR
 
        // add SQL-sytax to default $where
        $where .= " AND TIMESTAMPDIFF($device, $wpdb->posts.post_date_gmt, '$now') > $wait ";
    }
    return $where;
}
 
add_filter('posts_where', 'publish_later_on_feed');
