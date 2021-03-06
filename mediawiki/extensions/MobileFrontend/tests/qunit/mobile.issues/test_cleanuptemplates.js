( function ( M, $ ) {

	var cleanuptemplates = M.require( 'mobile.issues/cleanuptemplates' );

	QUnit.module( 'MobileFrontend issues', {
		setup: function () {
			$( '<div id="mfe-test-issues">' +
			mw.template.get( 'tests.mobilefrontend', 'issues.hogan' ).text +
			'</div>' ).appendTo( '#qunit-fixture' );
		},
		teardown: function () {
			$( '#mfe-test-issues' ).remove();
		}
	} );

	QUnit.test( '#nested tables text extraction', 1, function ( assert ) {
		var issues = cleanuptemplates._extractMessage( $( '#mfe-test-issues' ) );

		assert.strictEqual(
			$.trim( issues ),
			'<p>Level 1</p><p>Nested 1</p><p>Nested-nested 1</p>',
			'Correct text Extraction'
		);
	} );

}( mw.mobileFrontend, jQuery ) );
