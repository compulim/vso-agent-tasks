/// <reference path="../../../definitions/mocha.d.ts"/>
/// <reference path="../../../definitions/node.d.ts"/>
/// <reference path="../../../definitions/Q.d.ts"/>

import Q = require('q');
import psm = require('../../lib/psRunner');
import path = require('path');
var shell = require('shelljs');
var ps = shell.which('powershell');

describe('SonarQubePostTest Suite', function () {
    this.timeout(20000);

    before((done) => {
        // init here
        done();
    });

    after(function () {
    });

    if (ps) {
        it('UploadSumamryMdFile tests', (done) => {
            psm.runPS(path.join(__dirname, 'UploadSumamryMdFile.ps1'), done);
        })
         it('DisableAnalysisOnPrBuild tests', (done) => {
            psm.runPS(path.join(__dirname, 'DisableAnalysisOnPrBuild.ps1'), done);
        })
        it('TopLevelOrchestration tests', (done) => {
            psm.runPS(path.join(__dirname, 'TopLevelOrchestration.ps1'), done);
        })
        it('PRCA Report Processor tests', (done) => {
            psm.runPS(path.join(__dirname, 'PRCA', 'ReportProcessorTests.ps1'), done);
        })       
        it('PRCA Post Comments tests', (done) => {
            psm.runPS(path.join(__dirname, 'PRCA', 'PostCommentsTests.ps1'), done);
        })       
        it('PRCA Orchestrator tests', (done) => {
            psm.runPS(path.join(__dirname, 'PRCA', 'OrchestratorTests.ps1'), done);
        })       
    }
});