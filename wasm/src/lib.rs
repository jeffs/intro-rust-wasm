use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_two_ints(a: u32, b: u32) -> u32 {
    a + b
}

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
    let (mut a, mut b) = (1, 1);
    for _ in 0..n {
        let c = a + b;
        a = b;
        b = c;
    }
    a
}
