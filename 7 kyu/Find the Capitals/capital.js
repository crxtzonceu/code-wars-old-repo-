// i know this is not a good answer but i tried my best and make it work
// im still wanting to learn more better answer so it's all good

capitals = n => n.split('').map((a, b) => a == a.toUpperCase() ? b : a).filter(x => x >= 0)