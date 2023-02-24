import * as Sinon from "sinon";
import { Computed, computed, Observe, observe, ReactiveSubscribe } from "../../src";

describe("computed", () => {
    describe("computed instance", () => {
        it("should check the calculated value", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);

            // When
            const ob3 = computed(() => ob1.current + ob2.current);

            // Then
            expect(ob3.current).toBe(1);
        });
        it("should check if the value is calculated when the value changes", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);
            const ob3 = computed(() => ob1.current + ob2.current);

            // Whensp
            ob2.current = 2;

            // Then
            expect(ob3.current).toBe(2);
        });
        it("should check if an event fires when the value changes", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);
            const ob3 = computed(() => ob1.current + ob2.current);
            const subscribeSpy = Sinon.spy();

            ob3.subscribe(subscribeSpy);

            // When
            ob2.current = 2;

            // Then
            expect(subscribeSpy.calledOnce).toBe(true);
        });
    });
    describe("Computed decorator", () => {
        it("should check Computed decorator", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);

            // When
            @ReactiveSubscribe
            class TestComputed {
                @Computed
                get ob3() {
                    return ob1.current + ob2.current;
                }
            }
            const inst = new TestComputed();

            // Then
            expect(inst.ob3).toBe(1);
        });
        it("Check if the value is calculated even if the value changes", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);

            // When
            @ReactiveSubscribe
            class TestComputed {
                @Computed
                get ob3() {
                    return ob1.current + ob2.current;
                }
            }
            const inst = new TestComputed();
            ob2.current = 2;

            // Then
            expect(inst.ob3).toBe(2);
        });
        it("should check if an event fires when the value changes", () => {
            // Given
            const ob1 = observe(0);
            const ob2 = observe(1);

            @ReactiveSubscribe
            class TestComputed {
                @Computed
                get ob3() {
                    console.log("GET");
                    return ob1.current + ob2.current;
                }
            }
            interface TestComputed extends ReactiveSubscribe<{ ob3: number }> {}
            const inst = new TestComputed();
            const subscribeSpy = Sinon.spy();

            inst.subscribe("ob3", subscribeSpy);

            // When
            ob2.current = 2;

            // Then
            expect(subscribeSpy.calledOnce).toBe(true);
            expect(subscribeSpy.args[0][0]).toBe(2);
        });
        it("should check if an event fires even if the values of both instances change", () => {
            // Given
            @ReactiveSubscribe
            class TestComputed {
                @Observe ob1 = 0;
                @Observe ob2 = 1;
                @Computed
                get ob3() {
                    return this.ob1 + this.ob2;
                }
            }
            interface TestComputed extends ReactiveSubscribe<{ ob3: number }> {}
            const inst1 = new TestComputed();
            const inst2 = new TestComputed();
            const subscribeSpy = Sinon.spy();

            // When
            const ob4 = computed(() => inst1.ob3 + inst2.ob3);
            ob4.subscribe(subscribeSpy);
            inst1.ob1 = 1;

            // Then
            expect(subscribeSpy.calledOnce).toBe(true);
            expect(subscribeSpy.args[0][0]).toBe(3);
            expect(ob4.current).toBe(3);
        });
        it("should check if an event fires even if the values of both instances change", () => {
            // Given
            @ReactiveSubscribe
            class TestComputed {
                @Observe ob1 = 0;
                @Observe ob2 = 1;
                @Computed
                get ob3() {
                    return this.ob1 + this.ob2;
                }
            }
            interface TestComputed extends ReactiveSubscribe<{ ob3: number }> {}
            const inst1 = new TestComputed();
            const inst2 = new TestComputed();
            const subscribeSpy = Sinon.spy();

            // When
            const ob4 = computed(() => inst1.ob3 + inst2.ob3);
            ob4.subscribe(subscribeSpy);
            inst1.ob1 = 1;

            // Then
            expect(subscribeSpy.calledOnce).toBe(true);
            expect(subscribeSpy.args[0][0]).toBe(3);
            expect(ob4.current).toBe(3);
        });
    });
});
