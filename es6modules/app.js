import {add, multiply} from './math';
import $ from 'jquery';

$('#result').html(multiply(add(1, 2), add(3, 4)));
