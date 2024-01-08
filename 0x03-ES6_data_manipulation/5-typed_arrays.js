/*  a function that returns a new ArrayBuffer with an Int8 value at a specific position. */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
