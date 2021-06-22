export default function get(name) {
  return require(`./${name}`).default;
}
