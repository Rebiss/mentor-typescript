/**
 * @Enum_Type
 * 
 * Թույլ է տալիս լավ նկարագրփլ միատիպ էլեմենտները։
 */
    enum Position {
        Top = 11,
        Left,
        Bottom,
        Right,
    }

    function Style(css: Position): void { console.log(css) }

    Style(Position.Top)

    Position.Top;  // 11 Հետ է վերադարձնում ինդեքսը
    Position.Left; // 1
    Position.Bottom; //2
    Position.Right; //3
    // Reverse Enum
    Position[0]; // Top Հետ է վերադարձնում արժեքը
    Position[1]; // Left
    Position[2]; // Bottom
    Position[3]; // Right

/**
 * @Compile_TSC_ES5
 * 
 * Ստեղծվում է օբեկտի գեներացիա:
 * 

 'use strict';
 var Position;

 (function ( Position ) {
    Position[ Position['Top'] = 0 ] = 'Top';
    Position[ Position['Left'] = 1 ] = 'Left';
    Position[ Position['Bottom'] = 2 ] = 'Bottom';
    Position[ Position['Right'] = 3 ] = 'Right';
 })( Position || (Position = {}));

  */

/**
 * Այս դեպքում TSC չի ստեղծի օբեկտ:
 */
  const enum Name {
      Gasparyan = "Vruyr",
      Henzelyan = "Gretel",
  }
  const arrName = [Name.Gasparyan, Name.Henzelyan]
