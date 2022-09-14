import FlowerFamily from "./flowerFamily.js";
import Flower from "./flower.js";


//create flower category objects
const roses = new FlowerFamily("Roses", "./images/roses1.jpg");
const peonies = new FlowerFamily("Peonies", "./images/peonies.jpg");
const tulips = new FlowerFamily("Tulips", "./images/tulips.jpg");

//create flower objects
const redRose = new Flower("1", "Roses", "Red", "$5.00", "./images/red-roses.jpg");
const whiteRose = new Flower("2", "Roses", "White", "$4.50", "./images/white-roses.png");
const pinkRose = new Flower("3", "Roses", "Pink", "$4.00", "./images/pink-roses.jpg");
const redPeonies = new Flower("4", "Peonies", "Red", "$6.00", "./images/red-peonies.jpg");
const whitePeonies = new Flower("5", "Peonies", "White", "$5.50", "./images/white-peonies.jpg");
const pinkPeonies = new Flower("6", "Peonies", "Pink", "$4.60", "./images/pink-peonies.jpg");
const redTulip = new Flower("7", "Tulips", "Red", "$7.20", "./images/red-tulips.jpeg");
const yellowTulip = new Flower("8", "Tulips", "Yellow", "$5.30", "./images/yellow-tulips.jpeg");
const purpleTulip = new Flower("9", "Tulips", "Purple", "$8.50", "./images/purple-tulips.jpg");

export { roses, peonies, tulips, redRose, whiteRose, pinkRose, redPeonies, whitePeonies, pinkPeonies, redTulip, yellowTulip, purpleTulip };
