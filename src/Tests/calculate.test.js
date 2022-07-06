import calculate from '../calculate'


it('check if input is a number', ()=>{
    const mockCallback = jest.fn("6");

})

it("Checks if button pressed is A/C", () => {
    expect(calculate({total:2,next:"4"}, "AC")).toBeFalsy
})