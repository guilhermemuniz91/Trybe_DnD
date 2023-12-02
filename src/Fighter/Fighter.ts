// import Energy from '../Energy';

// export interface GenericFighter<T> {
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   energy?: Energy;

//   attack(enemy: T): void;
//   special?(enemy: T): void;
// }

// export default interface Fighter extends GenericFighter<Fighter>{

//   receiveDamage(attackPoints: number): number;
//   levelUp(): void;
// }

import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;