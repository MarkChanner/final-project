describe('Key', function() {
  let key;
  let a;
  let b;
  let c;
  let d;
  let f;

  beforeEach(function() {
    key = new Key();
    a = [440, 415, 369, 329, 293, 277, 246, 3];
    b = [466, 415, 364, 349, 311, 277, 261, 3];
    c = [523, 493, 440, 392, 349, 329, 293, 3];
    d = [587, 523, 493, 440, 392, 369, 329, 3];
    f = [369, 329, 293, 277, 246, 220, 207, 3];
  });

  it('has a key with array of frequecies when initialized', function() {
    expect(key.keys[0]).toEqual(a);
  });

  it('has a default value key', function() {
    expect(key.value).toEqual(a);
  });

  it('changes value when 1st new key is selected', function() {
    key.change();
    expect(key.value).toEqual(b);
  });

  it('changes value when 2nd new key is selected', function() {
    key.change();
    key.change();
    expect(key.value).toEqual(c);
  });

  it('changes value back to default when 6th key is selected', function() {
    for (var i = 0; i < 5; i++) {
      key.change();
    }
    expect(key.value).toEqual(a);
  });

  it('starts with a key name of "A Major"', function() {
    expect(key.keyName).toEqual('A Major');
  });

  it('changes key name from A Major to Bb Aeolian', function() {
    key.change();
    expect(key.keyName).toEqual('Bb Aeolian');
  });
});
